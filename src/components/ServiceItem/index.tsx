import { Checkbox, FormGroup, FormControlLabel } from "@mui/material";

interface IServiceItem {
  itemNumber: number;
  valueItem01: string;
  valueItem02: string;
  valueItem03: string;
}

const ServiceItem: React.FC<IServiceItem> = ({
  itemNumber,
  valueItem01,
  valueItem02,
  valueItem03,
}) => {
  const handleChange = () => {};

  return (
    <div className="border-solid border-2 border-sky-300 px-4 py-2">
      <div>
        <p className="text-lg text-red-500 font-medium">Service {itemNumber}</p>
      </div>

      <div>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                onChange={() => {
                  handleChange();
                }}
              />
            }
            label={valueItem01}
          />
          <FormControlLabel control={<Checkbox />} label={valueItem02} />
          <FormControlLabel control={<Checkbox />} label={valueItem03} />
        </FormGroup>
      </div>
    </div>
  );
};

export default ServiceItem;
