import CustomIcons from "./CustomIcons";

const DetailsCard = ({
  Icon,
  title,
  description,
  info,
}: {
  Icon: any;
  title: string;
  description: string;
  info: string;
}) => {
  return (
    <div>
      <CustomIcons Icon={Icon} />

      <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">
        {title}
      </h2>
      <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
        {description}
      </p>
      <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">{info}</p>
    </div>
  );
};

export default DetailsCard;
