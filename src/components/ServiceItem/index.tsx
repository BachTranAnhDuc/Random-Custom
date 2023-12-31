import { Checkbox, FormGroup, FormControlLabel } from "@mui/material";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../../features/services/servicesSlice";
import { useAppSelector } from "../../hooks";

interface IServiceItem {
  nameService: string;
  valuesService: string[];
}

const ServiceItem: React.FC<IServiceItem> = ({
  nameService,
  valuesService,
}) => {
  const dispatch = useDispatch();
  const serviceData = useAppSelector((store) => store.services);
  const itemsData = Object.values(serviceData.data).flat();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      dispatch(
        addItem({ nameService: nameService, valueItem: event.target.value }),
      );
    } else {
      dispatch(
        removeItem({ nameService: nameService, valueItem: event.target.value }),
      );
    }
  };

  const checkedExist = (item: string) => {
    return itemsData.includes(item);
  };

  return (
    <div className="border-solid border-2 rounded border-pink-200 bg-white shadow shadow-pink-200 px-4 py-2">
      <div>
        <p className="text-lg text-red-500 font-medium">{nameService}</p>
      </div>

      <div>
        <FormGroup>
          {valuesService.map((el, index) => {
            return (
              <FormControlLabel
                key={index}
                control={<Checkbox onChange={handleChange} />}
                label={el}
                value={el}
                checked={checkedExist(el)}
              />
            );
          })}
        </FormGroup>
      </div>
    </div>
  );
};

export default ServiceItem;
