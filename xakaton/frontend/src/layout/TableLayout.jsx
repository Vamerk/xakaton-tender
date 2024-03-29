import PropTypes from "prop-types";

const TableLayout = ({ children }) => {
  return (
    <div className=" max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className=" flex flex-col">
        <div className=" -m-1.5 ">
          <div className=" p-1.5 min-w-full  align-middle ">
            <div className="   bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-slate-900 dark:border-gray-700">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

TableLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TableLayout;
