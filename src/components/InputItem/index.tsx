import { FaChevronRight } from 'react-icons/fa6';
import useQwQ from '@/hooks/qwq';
import { SettingsKeys } from '@/lib/qwq';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

export type SwitchItemProps = {
  name: SettingsKeys;
  label: React.ReactNode;
  description?: React.ReactNode;
  type?: 'input' | 'textarea';
};

const InputItem: React.FC<SwitchItemProps> = (props) => {
  const { name, label, description, type = 'input' } = props;
  const uqwq = useQwQ();
  const data = uqwq.useWatch();
  const value = data[name].value as string;
  const [inputValue, setInputValue] = useState(value);
  const [open, setOpen] = useState(false);
  const onSave = () => {
    uqwq.setString(name, inputValue);
    setOpen(false);
  };
  return (
    <>
      <Dialog
        onOpenChange={(open) => {
          setOpen(open);
          if (!open) {
            setInputValue(value);
          }
        }}
        open={open}
      >
        <DialogTrigger asChild>
          <div className="flex gap-1 rounded-md bg-background p-3 active:bg-secondary">
            <div className="flex flex-col gap-1 flex-1">
              <div className="font-medium text-base line-clamp-1">{label}</div>
              {description && <p className="text-sm text-muted-foreground">{description}</p>}
            </div>
            <FaChevronRight className="self-center flex-grow-0 flex-shrink-0" />
          </div>
        </DialogTrigger>
        <DialogContent className="rounded-md max-w-[calc(100%_-_12px)]">
          <DialogHeader>
            <DialogTitle>{label}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
          </DialogHeader>
          <div className="py-4">
            {type === 'input' ? (
              <Input
                placeholder="请输入内容"
                value={inputValue}
                onChange={(e) => {
                  setInputValue(e.target.value);
                }}
              />
            ) : (
              <Textarea
                placeholder="请输入内容"
                value={inputValue}
                onChange={(e) => {
                  setInputValue(e.target.value);
                }}
              />
            )}
          </div>
          <DialogFooter>
            <Button onClick={onSave}>保存</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default InputItem;
