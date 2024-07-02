type Props = {
  title: string;
};
const PageHeader = ({ title }: Props) => {
  return (
    <div className="font-PartialSans text-gon-green text-3xl mb-5">{title}</div>
  );
};

export default PageHeader;
