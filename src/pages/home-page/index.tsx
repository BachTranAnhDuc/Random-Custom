import { ServiceItem } from "../../components";
import {
  SERVICE_01,
  SERVICE_02,
  SERVICE_03,
  SERVICE_04,
  SERVICE_05,
  SERVICE_06,
} from "../../constants/NameService";
import { useAppSelector } from "../../hooks";

const HomePage: React.FC = () => {
  const dataServices = useAppSelector((store) => store.services);

  return (
    <div className="grid grid-cols-3 gap-x-8 items-start">
      <div className="bg-gray-50 shadow-lg rounded p-8 col-start-1 col-end-3 grid grid-cols-3 gap-4">
        <ServiceItem
          nameService={SERVICE_01}
          valuesService={["option1", "option2", "option3"]}
        ></ServiceItem>

        <ServiceItem
          nameService={SERVICE_02}
          valuesService={["option4", "option5", "option6"]}
        ></ServiceItem>

        <ServiceItem
          nameService={SERVICE_03}
          valuesService={["option7", "option8", "option9"]}
        ></ServiceItem>

        <ServiceItem
          nameService={SERVICE_04}
          valuesService={["option10", "option11", "option12"]}
        ></ServiceItem>

        <ServiceItem
          nameService={SERVICE_05}
          valuesService={["option13", "option14", "option15"]}
        ></ServiceItem>

        <ServiceItem
          nameService={SERVICE_06}
          valuesService={["option16", "option17", "option18"]}
        ></ServiceItem>
      </div>

      <div className="bg-gray-50 h-full shadow-lg rounded  p-8 grid grid-rows-[max-content_1fr] gap-4">
        <div>
          <p className="text-xl font-bold text-red-500 uppercase">response</p>
        </div>

        <div className="bg-white p-4 rounded border-2 border-teal-200 shadow shadow-teal-200">
          <pre>
            <code>{JSON.stringify(dataServices, null, 2)}</code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
