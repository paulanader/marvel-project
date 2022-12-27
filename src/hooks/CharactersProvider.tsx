import React from "react";
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { CharacterType } from "../@types/CharacterType";
import { Api } from "../services/api";

interface ICharactersContextProp {
  character: CharacterType | null;
  characters: CharacterType[];
  isLoading: boolean;
  pageCount: number;
  currentPage: number;
  isLastPage: boolean;
  getCharacter: (id: string) => void;
  getCharacters: (page?: number) => void;
}

interface ICharactersProviderProps {
  children: React.ReactNode;
}

export const CharactersContext = createContext<ICharactersContextProp>(
  {} as ICharactersContextProp
);

export const useCharacter = (): ICharactersContextProp => {
  const context = useContext(CharactersContext);

  if (!context) {
    throw new Error("usecharacter must be within charactersProvider");
  }

  return context;
};

export const CharactersProvider: React.FC<ICharactersProviderProps> = ({
  children,
}) => {
  const [characters, setCharacters] = useState<CharacterType[]>([]);
  const [character, setCharacter] = useState<CharacterType | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [isLastPage, setIsLastPage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const getCharacters = useCallback(async (page = 1) => {
    const limit = 20;
    const offset = limit * (page - 1);
    setIsLoading(true);

    setCurrentPage(page);

    try {
      let url = `/characters?ts=1&apikey=61c2e48bb48d5c410b93389820c710b1&hash=d139ac9c3eb046861b8fd4b7bd23e163&limit=${limit}&offset=${offset}`;

      const response = await Api.get(url);
      setCharacters(response.data?.data?.results ?? []);

      if (response?.data?.data?.results?.length < 20) {
        setIsLastPage(true);
      }
      setPageCount(
        Math.ceil(
          (response.data?.data?.total ?? 0) / (response.data?.data?.limit ?? 1)
        )
      );
    } catch (e) {
      setCharacters([]);
      setIsLastPage(false);
      setPageCount(0);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const getCharacter = useCallback(async (id: string) => {
    setIsLoading(true);

    try {
      let url = `/characters/${id}?ts=1&apikey=61c2e48bb48d5c410b93389820c710b1&hash=d139ac9c3eb046861b8fd4b7bd23e163`;

      const response = await Api.get(url);
      setCharacter(response.data?.data?.results[0] ?? null);
    } catch (e) {
      setCharacter(null);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const providerValue = useMemo(
    () => ({
      character,
      characters,
      isLoading,
      currentPage,
      isLastPage,
      pageCount,
      getCharacters,
      getCharacter,
    }),
    [
      character,
      characters,
      isLoading,
      currentPage,
      isLastPage,
      pageCount,
      getCharacter,
      getCharacters,
    ]
  );

  return (
    <CharactersContext.Provider value={providerValue}>
      {children}
    </CharactersContext.Provider>
  );
};
