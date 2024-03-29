import { useState } from "react";

const index = ({ tender }) => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  console.log(tender);
  return (
    <div
      className="border-b border-gray-200 hover:bg-gray-50 dark:hover:bg-slate-900 dark:border-gray-700"
      onClick={toggleVisibility}
    >
      <button
        type="button"
        className="hs-collapse-toggle py-4 px-6 w-full flex items-center gap-2 font-semibold text-gray-800 dark:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
        id="hs-basic-collapse"
        data-hs-collapse="#hs-as-table-collapse"
      >
        <svg
          className={`rotate-${isVisible ? "90" : "0"} size-4`}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
        {/* {tender.name} */}
        {tender.title}
      </button>

      <div
        className={` w-full overflow-x-auto inline-block transition-height duration-500 ${
          isVisible ? "h-auto" : "h-0"
        }`}
      >
        <table className="table-auto w-full divide-y divide-gray-200 dark:divide-gray-700 ">
          <thead className="bg-gray-50 dark:bg-slate-900">
            <tr>
              <th scope="col" className="px-6 py-3 text-center w-4">
                <div className="flex items-center gap-x-2">
                  <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                    Наименование
                  </span>
                </div>
              </th>

              <th scope="col" className="px-6 py-3 text-start">
                <div className="flex items-center gap-x-2">
                  <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                    кол-во
                  </span>
                </div>
              </th>

              <th scope="col" className="px-6 py-3 text-start">
                <div className="flex items-center gap-x-2">
                  <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                    ед.измерения
                  </span>
                </div>
              </th>

              <th scope="col" className="px-6 py-3 text-start">
                <div className="flex items-center gap-x-2">
                  <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                    Адрес места поставки
                  </span>
                </div>
              </th>

              <th scope="col" className="px-6 py-3 text-end"></th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {tender.products.map((product, index) => (
              
              <tr
                key={index}
                className="bg-white hover:bg-gray-50 dark:bg-slate-900 dark:hover:bg-slate-800"
              >
                <td className=" size-px whitespace-normal text-start">
                  <button
                    type="button"
                    className="block"
                    data-hs-overlay="#hs-ai-invoice-modal"
                  >
                    <span className="block px-6 py-2 text-start">
                      <span className=" font-mono text-sm text-blue-600 dark:text-blue-500 ">
                        {/* {tender.address.city} */}
                        {product.name}
                      </span>
                    </span>
                  </button>
                </td>
                <td className="size-px whitespace-nowrap">
                  <button
                    type="button"
                    className="block"
                    data-hs-overlay="#hs-ai-invoice-modal"
                  >
                    <span className="block px-6 py-2">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {/* {tender.address.zipcode} */}
                        {product.value}
                      </span>
                    </span>
                  </button>
                </td>
                <td className="size-px whitespace-nowrap">
                  <button
                    type="button"
                    className="block"
                    data-hs-overlay="#hs-ai-invoice-modal"
                  >
                    <span className="block px-6 py-2">
                      {/* {tender.address.suite} */}
                      {product.unit}
                    </span>
                  </button>
                </td>
                <td className="size-px whitespace-nowrap">
                  <button
                    type="button"
                    className="block"
                    data-hs-overlay="#hs-ai-invoice-modal"
                  >
                    <span className="block px-6 py-2">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {/* {tender.address.street} */}
                        {tender.price}
                      </span>
                    </span>
                  </button>
                </td>

                <td className="size-px whitespace-nowrap">
                  <a href={tender.link} className="cursor-pointer block">
                  {/* <button
                    type="button"
                    className="block"
                    data-hs-overlay="#hs-ai-invoice-modal"
                  > */}
                    <span className="px-6 py-1.5">
                      <span className="py-1 px-2 inline-flex justify-center items-center gap-2 rounded-lg border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                        <svg
                          className="flex-shrink-0 size-4"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27zm.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0l-.509-.51z" />
                          <path d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z" />
                        </svg>
                        Подробнее 
                      </span>
                    </span>
                  {/* </button> */}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default index;
