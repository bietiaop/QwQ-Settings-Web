import { PageSetting } from '@/lib/qwq';
import SwitchItem from '../SwitchItem';
import InputItem from '../InputItem';

export type ItemProps = {
  data: PageSetting;
};

// 解析 <highlight> 标签 函数
const parseHighlight = (label: string) => {
  const reg = /<highlight>(.*?)<\/highlight>/g;
  const arr = label.split(reg);
  return arr.map((item, index) => {
    if (index % 2 === 1) {
      return (
        <span key={index} className="text-red-500">
          {item}
        </span>
      );
    }
    return <span key={index}>{item}</span>;
  });
};

const Item: React.FC<ItemProps> = (props) => {
  const { data } = props;
  const { label, description, type, name } = data;
  let _description = description;
  if (typeof description === 'string') {
    _description = parseHighlight(description);
  }

  if (type === 'switch') {
    return <SwitchItem key={name} name={name} label={label} description={_description} />;
  }
  if (type === 'textarea' || type === 'input') {
    return (
      <InputItem key={name} name={name} label={label} type={type} description={_description} />
    );
  }
  return null;
};

export default Item;
