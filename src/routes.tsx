import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
} from "react-router-dom";
import { DisplayFavorites } from "./components/displayFavorites";
import { NewsFilter } from "./components/newsFilter";
import { RandomBooks } from "./components/randomBooks";
import { ReviewForm } from "./components/reviewForm";
import { SearchPage } from "./components/searchPage";
import { TopTen } from "./components/topTen";
import { PageLayout } from "./layouts/pageLayout";
import { AddAdvertisement, AddBook, Home, Login, Register } from "./pages";
import { BookPage } from "./pages/BookPage";
import { NewsPage } from "./pages/NewsPage";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<PageLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/add-book" element={<AddBook />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/displayBooks" element={<DisplayFavorites />} />
      <Route path="/book/:id" element={<BookPage />} />
      <Route path="/book/:id/review" element={<ReviewForm />} />
      <Route path="/TopTenPage" element={<TopTen />} />
      <Route path="/add-advertisement" element={<AddAdvertisement />} />
      <Route path="/NewsPage" element={<NewsFilter />} />
      <Route path="/RandomPage" element={<RandomBooks />} />
    </Route>
  )
);
