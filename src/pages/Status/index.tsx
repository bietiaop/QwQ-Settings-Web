import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

export type StatusCardProps = {
  title: string;
  status: string;
  variant?: 'default' | 'secondary' | 'destructive' | 'outline';
  bg?: string;
};
const StatusCard: React.FC<StatusCardProps> = (props) => {
  const { title, status, variant, bg } = props;
  return (
    <Card>
      <CardContent className="p-4">
        <div className="mb-4 grid grid-cols-[25px_1fr] items-center pb-4 last:mb-0 last:pb-0">
          <span className={cn('flex h-3 w-3 rounded-full bg-sky-500', bg)} />
          <div className="space-y-1">
            <p className="font-medium leading-none">{title}</p>
            <Badge className="text-xs" variant={variant}>
              {status}
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const Status = () => {
  const status = window.qwq.getStatus();
  const qqVersion = window.qwq.getQQVersion();
  const moduleVersion = window.qwq.getModuleVersion();
  return (
    <div className="p-3 flex flex-col gap-3">
      <StatusCard title="运行模式" status={status} bg="bg-sky-500" />
      <StatusCard title="应用版本" status={qqVersion} bg="bg-amber-300" variant="outline" />
      <StatusCard title="模块版本" status={moduleVersion} bg="bg-pink-600" variant="outline" />
    </div>
  );
};

export default Status;
