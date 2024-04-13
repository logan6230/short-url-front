import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { getAllUrlShorts, postUrl } from "../../utils/axiosConfig";
import axios from "axios";

const Home = () => {
  const [longURL, setLongURL] = useState("");
  const [domain, setDomain] = useState("");
  const [customAlias, setCustomAlias] = useState("");
  const [shortenedURL, setShortenedURL] = useState("");
  const [recentURLs, setRecentURLs] = useState([]);

  const handleShortenURL = async () => {
    try {
      const response = await axios.post("http://localhost:8082/create", {
        url: longURL,
        domain: domain,
      });
      console.log(response);

      if (response.status === 200) {
        setShortenedURL(response.data);
        const urls = await getAllUrlShorts();
        setRecentURLs(urls.data);
      }
    } catch (error) {
      console.error("Error al acortar URL:", error);
    }
  };

  useEffect(() => {
    const fetchRecentURLs = async () => {
      const urls = await getAllUrlShorts();
      setRecentURLs(urls.data);
    };
    fetchRecentURLs();
  }, []);

  return (
    <div>
      <div className="max-w-screen-sm mx-auto bg-secondary-100 shadow-md rounded px-4 py-3">
        <h2 className="text-lg text-gray-100 font-semibold mb-4">
          Acortador de URL
        </h2>
        <div className="lg:flex">
          <div className="mb-4 lg:w-1/2">
            <label className="block text-sm font-bold mb-2" htmlFor="longURL">
              Enter long link here
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="longURL"
              type="text"
              placeholder="https://ejemplo.com"
              value={longURL}
              onChange={(e) => setLongURL(e.target.value)}
            />
          </div>
          <div className="mb-4 lg:w-1/2 lg:pl-6">
            <label
              className="block text-sm font-bold mb-2"
              htmlFor="customAlias"
            >
              Personaliza tu link
            </label>
            <div className="flex items-center">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="ingrese un alias"
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
              />
            </div>
          </div>
        </div>

        <button
          className="w-50 bg-secondary-900 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={handleShortenURL}
        >
          Acortar URL
        </button>

        {shortenedURL && (
          <div className="mt-4 flex gap-3">
            <p className="text- text-gray-100">URL acortada: </p>
            <p
              rel="noopener noreferrer"
              className="text-amber-400 text-lg font-bold"
            >
              {shortenedURL}
            </p>
          </div>
        )}
      </div>

      <div>
        <h1 className="text-2xl text-white my-3">URLs recientes</h1>
      </div>
      <div>
        <div className="overflow-x-auto">
          <div className="overflow-x-auto">
            <table className="w-full table-auto">
              <thead className="bg-gray-500 border">
                <tr className="text-gray-100">
                  <th className="px-4 py-2 border" style={{ maxWidth: "60%" }}>
                    URL
                  </th>
                  <th className="px-4 py-2 border" style={{ width: "40%" }}>
                    URL Corta
                  </th>
                </tr>
              </thead>
              <tbody>
                {recentURLs.map((url) => (
                  <tr key={url.id}>
                    <td
                      className="border px-4 py-2 whitespace-nowrap overflow-hidden overflow-ellipsis"
                      style={{ maxWidth: "30rem" }}
                    >
                      <a
                        href={url.urlOrigin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-200"
                      >
                        {url.urlOrigin}
                      </a>
                    </td>
                    <td className="border px-4 py-2">
                      <p className="text-green-500">{url.urlShorted}</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
