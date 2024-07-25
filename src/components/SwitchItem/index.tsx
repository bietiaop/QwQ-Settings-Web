import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

import useQwQ from '@/hooks/qwq';
import { SettingsKeys } from '@/lib/qwq';

export type SwitchItemProps = {
  name: SettingsKeys;
  label: React.ReactNode;
  description?: React.ReactNode;
};

const SwitchItem: React.FC<SwitchItemProps> = (props) => {
  const { name, label, description } = props;
  const uqwq = useQwQ();
  const data = uqwq.useWatch();
  const value = data[name].value as boolean;
  const handleChange = () => {
    uqwq.setBoolean(name, !value);
  };
  return (
    <Label htmlFor={name + 'switch'}>
      <div className="flex flex-col gap-1 rounded-md p-3 bg-background">
        <div className="flex items-center justify-between">
          <div className="font-medium text-base line-clamp-1">{label}</div>
          <Switch checked={value} onClick={handleChange} id={name + 'switch'} />
        </div>
        {description && <p className="text-sm text-muted-foreground">{description}</p>}
      </div>
    </Label>
  );
};

export default SwitchItem;
