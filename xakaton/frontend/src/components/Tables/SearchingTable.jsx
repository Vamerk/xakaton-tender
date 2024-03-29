import { useState } from "react";
import axios from "axios";

import TableLayout from "../../layout/TableLayout";
import TenderItem from "../TenderItem";
import TableHeader from "../TableHeader";
import Pagination from "../Pagination";

const SearchingTable = () => {
  const [data, setData] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [tenders, setTenders] = useState([]);
  console.log(data);

  const handleInputChange = (inputData) => {
    setData(inputData);
  };

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  // const tenders = [
  //   {
  //     id: 1,
  //     title: "Tender",
  //     products: [
  //       {
  //         name: "труба стальная 30x16 труба стальная 30x16 труба стальная 30x16 труба стальная 30x16s",
  //         amount: "33",
  //         unit: "шт",
  //         address: "г.Оренбург",
  //       },
  //       {
  //         name: "гвозди",
  //         amount: "3223",
  //         unit: "шт",
  //         address: "г.Оренбург",
  //       },
  //       {
  //         name: "листы",
  //         amount: "1",
  //         unit: "шт",
  //         address: "г.Оренбург",
  //       },
  //     ],
  //   },
  //   {
  //     id: 2,
  //     title: "Tender",
  //     products: [
  //       {
  //         name: "труба стальная 30x16 труба стальная 30x16 труба стальная 30x16 труба стальная 30x16s",
  //         amount: "33",
  //         unit: "шт",
  //         address: "г.Оренбург",
  //       },
  //       {
  //         name: "гвозди",
  //         amount: "3223",
  //         unit: "шт",
  //         address: "г.Оренбург",
  //       },
  //       {
  //         name: "листы",
  //         amount: "1",
  //         unit: "шт",
  //         address: "г.Оренбург",
  //       },
  //     ],
  //   },
  //   {
  //     id: 3,
  //     title: "Tender",
  //     products: [
  //       {
  //         name: "труба стальная 30x16 труба стальная 30x16 труба стальная 30x16 труба стальная 30x16s",
  //         amount: "33",
  //         unit: "шт",
  //         address: "г.Оренбург",
  //       },
  //       {
  //         name: "гвозди",
  //         amount: "3223",
  //         unit: "шт",
  //         address: "г.Оренбург",
  //       },
  //       {
  //         name: "листы",
  //         amount: "1",
  //         unit: "шт",
  //         address: "г.Оренбург",
  //       },
  //     ],
  //   },
  //   {
  //     id: 4,
  //     title: "Tender",
  //     products: [
  //       {
  //         name: "труба стальная 30x16 труба стальная 30x16 труба стальная 30x16 труба стальная 30x16s",
  //         amount: "33",
  //         unit: "шт",
  //         address: "г.Оренбург",
  //       },
  //       {
  //         name: "гвозди",
  //         amount: "3223",
  //         unit: "шт",
  //         address: "г.Оренбург",
  //       },
  //       {
  //         name: "листы",
  //         amount: "1",
  //         unit: "шт",
  //         address: "г.Оренбург",
  //       },
  //     ],
  //   },
  //   {
  //     id: 5,
  //     title: "Tender",
  //     products: [
  //       {
  //         name: "труба стальная 30x16 труба стальная 30x16 труба стальная 30x16 труба стальная 30x16s",
  //         amount: "33",
  //         unit: "шт",
  //         address: "г.Оренбург",
  //       },
  //       {
  //         name: "гвозди",
  //         amount: "3223",
  //         unit: "шт",
  //         address: "г.Оренбург",
  //       },
  //       {
  //         name: "листы",
  //         amount: "1",
  //         unit: "шт",
  //         address: "г.Оренбург",
  //       },
  //     ],
  //   },
  //   {
  //     id: 6,
  //     title: "Tender",
  //     products: [
  //       {
  //         name: "труба стальная 30x16 труба стальная 30x16 труба стальная 30x16 труба стальная 30x16s",
  //         amount: "33",
  //         unit: "шт",
  //         address: "г.Оренбург",
  //       },
  //       {
  //         name: "гвозди",
  //         amount: "3223",
  //         unit: "шт",
  //         address: "г.Оренбург",
  //       },
  //       {
  //         name: "листы",
  //         amount: "1",
  //         unit: "шт",
  //         address: "г.Оренбург",
  //       },
  //     ],
  //   },
  //   {
  //     id: 7,
  //     title: "Tender",
  //     products: [
  //       {
  //         name: "труба стальная 30x16 труба стальная 30x16 труба стальная 30x16 труба стальная 30x16s",
  //         amount: "33",
  //         unit: "шт",
  //         address: "г.Оренбург",
  //       },
  //       {
  //         name: "гвозди",
  //         amount: "3223",
  //         unit: "шт",
  //         address: "г.Оренбург",
  //       },
  //       {
  //         name: "листы",
  //         amount: "1",
  //         unit: "шт",
  //         address: "г.Оренбург",
  //       },
  //     ],
  //   },
  //   {
  //     id: 8,
  //     title: "Tender",
  //     products: [
  //       {
  //         name: "труба стальная 30x16 труба стальная 30x16 труба стальная 30x16 труба стальная 30x16s",
  //         amount: "33",
  //         unit: "шт",
  //         address: "г.Оренбург",
  //       },
  //       {
  //         name: "гвозди",
  //         amount: "3223",
  //         unit: "шт",
  //         address: "г.Оренбург",
  //       },
  //       {
  //         name: "листы",
  //         amount: "1",
  //         unit: "шт",
  //         address: "г.Оренбург",
  //       },
  //     ],
  //   },
  //   {
  //     id: 9,
  //     title: "Tender",
  //     products: [
  //       {
  //         name: "труба стальная 30x16 труба стальная 30x16 труба стальная 30x16 труба стальная 30x16s",
  //         amount: "33",
  //         unit: "шт",
  //         address: "г.Оренбург",
  //       },
  //       {
  //         name: "гвозди",
  //         amount: "3223",
  //         unit: "шт",
  //         address: "г.Оренбург",
  //       },
  //       {
  //         name: "листы",
  //         amount: "1",
  //         unit: "шт",
  //         address: "г.Оренбург",
  //       },
  //     ],
  //   },
  //   {
  //     id: 10,
  //     title: "Tender",
  //     products: [
  //       {
  //         name: "труба стальная 30x16 труба стальная 30x16 труба стальная 30x16 труба стальная 30x16s",
  //         amount: "33",
  //         unit: "шт",
  //         address: "г.Оренбург",
  //       },
  //       {
  //         name: "гвозди",
  //         amount: "3223",
  //         unit: "шт",
  //         address: "г.Оренбург",
  //       },
  //       {
  //         name: "листы",
  //         amount: "1",
  //         unit: "шт",
  //         address: "г.Оренбург",
  //       },
  //     ],
  //   },
  //   {
  //     id: 11,
  //     title: "Tender",
  //     products: [
  //       {
  //         name: "труба стальная 30x16 труба стальная 30x16 труба стальная 30x16 труба стальная 30x16s",
  //         amount: "33",
  //         unit: "шт",
  //         address: "г.Оренбург",
  //       },
  //       {
  //         name: "гвозди",
  //         amount: "3223",
  //         unit: "шт",
  //         address: "г.Оренбург",
  //       },
  //       {
  //         name: "листы",
  //         amount: "1",
  //         unit: "шт",
  //         address: "г.Оренбург",
  //       },
  //     ],
  //   },
  // ];
  const firstTenderIndex = (currentPage - 1) * 5;
  // const ascbasc = [tenders].flat();
  // const currentTenders = ascbasc.slice(firstTenderIndex, firstTenderIndex + 5);
  const currentTenders = tenders.slice(firstTenderIndex, firstTenderIndex + 5);

  const baseUrl = "http://localhost:8080/parse";

  const getTenders = async () => {
    try {
      const response = await axios.get(`${baseUrl}/${data.keyword}`);
      setTenders(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  // const getTenders = async () => {
  //   try {
  //     const response = await axios.get(`${baseUrl}/api/v1`, {
  //       params: {
  //         resp: data,
  //       },
  //     });
  //     setTenders(response.data);
  //     console.log(response.data);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  return (
    <>
      <TableLayout>
        <TableHeader
          onInputChange={handleInputChange}
          title={"Автоматический поиск тендеров"}
          inputText={true}
          inputDate={true}
          getTenders={getTenders}
        />
        {currentTenders.map((tender, index) => (
          <TenderItem key={index} tender={tender} />
        ))}

        <Pagination
          lastTender={tenders.length}
          currentPage={currentPage}
          onPageChange={onPageChange}
        />
      </TableLayout>
    </>
  );
};

export default SearchingTable;
