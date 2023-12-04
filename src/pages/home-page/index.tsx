import { ServiceItem } from "../../components";

const HomePage: React.FC = () => {
  const testData = {
    data: {
      Service1: {
        option1: true,
        option2: true,
      },
    },
  };

  return (
    <div className="grid grid-cols-3 gap-x-8">
      <div className="bg-red-200 px-8 py-4 col-start-1 col-end-3 grid grid-cols-3 gap-4">
        <ServiceItem
          itemNumber={1}
          valueItem01="option1"
          valueItem02="option2"
          valueItem03="option3"
        ></ServiceItem>

        {/* <ServiceItem></ServiceItem> */}
        {/**/}
        {/* <ServiceItem></ServiceItem> */}
        {/**/}
        {/* <ServiceItem></ServiceItem> */}
        {/**/}
        {/* <ServiceItem></ServiceItem> */}
        {/**/}
        {/* <ServiceItem></ServiceItem> */}
      </div>

      <div className="bg-yellow-200 px-8 py-4 grid grid-rows-[max-content_1fr] gap-4">
        <div>
          <p className="text-xl font-bold text-red-500 uppercase">response</p>
        </div>

        <div>
          <pre>{JSON.stringify(testData, null, 2)}</pre>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
