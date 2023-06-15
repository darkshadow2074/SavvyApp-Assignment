import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { initialState } from "../reducer/initialState.js";
import { postReducer } from "../reducer/reducerFunction.js";
import { fetchData } from "../service/fetchData.js";
import { FETCH_DATA } from "../reducer/actionTypes.js";

const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [error, setError] = useState(null);

  const [isLoading, setIsLoading] = useState(false);
  const getMeData = async () => {
    try {
      setIsLoading(true);
      const { data, status } = await fetchData();
      if (status === 200) {
        dispatch({ type: FETCH_DATA, payload: data });
      }
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      return setInterval(() => setIsLoading(false), 1000);
    }
  };
  useEffect(() => {
    let id = getMeData();
    return clearInterval(id);
  }, []);
  const [postsData, dispatch] = useReducer(postReducer, initialState);
  return (
    <PostContext.Provider value={{ postsData, dispatch, isLoading, error }}>
      {children}
    </PostContext.Provider>
  );
};

export const UsePostContext = () => useContext(PostContext);
