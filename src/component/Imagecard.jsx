import { useEffect, useState } from "react";
import axios from "axios";

const ImageCard = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const getdata = async () => {
    setLoading(true);
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${page}&limit=40`
    );
    setData(response.data);
    setLoading(false);
  };

  useEffect(() => {
    getdata();
  }, [page]);

  return (
    <div className="pb-3">
      {loading ? (
        <div className="flex justify-center items-center h-[74vh] lg:h-[80vh] ">
          <p className="text-lg font-semibold">Loading.....</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-2 auto-rows-[10px] px-2 ">
          {data.map((elem, idx) => {
            return (
              <div key={idx}>
                <a
                  href={elem.url}
                  target="_blank"
                  className="overflow-hidden cursor-pointer rounded-[7px]"
                  style={{
                    gridRowEnd: `span ${Math.ceil(
                      (elem.height / elem.width) * 30
                    )}`,
                  }}
                >
                  <img
                    src={elem.download_url}
                    className="w-full h-full object-cover rounded-[7px]"
                    loading="lazy"
                  />
                </a>
              </div>
            );
          })}
        </div>
      )}
      <div className="w-full h-15 flex justify-center items-center lg:gap-6 gap-3">
        <button
          style={{ opacity: page == 1 ? 0.5 : 1 }}
          onClick={() => {
            if (page > 1) {
              setPage(page - 1);
            }
          }}
          className="rounded bg-black text-white px-4 py-2 text-[15px] lg:text-[18px] cursor-pointer active:scale-95  "
          disabled={loading}
        >
          Prev
        </button>

        <p>{page}</p>

        <button
          onClick={() => {
            setPage(page + 1);
          }}
          className="rounded bg-black text-white px-4 py-2 text-[15px] lg:text-[18px] cursor-pointer active:scale-95  "
          disabled={loading}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ImageCard;
