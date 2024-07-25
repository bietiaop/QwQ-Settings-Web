import { memo } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Status from '@/pages/Status';
import { keys, settings } from '@/lib/qwq';
import Item from './components/Item';

type PageType = {
  [key in keys | 'status']: {
    title: string;
  };
};
const pages: PageType = {
  status: {
    title: '状态',
  },
  chat: {
    title: '聊天设置',
  },
  message: {
    title: '消息设置',
  },
  group: {
    title: '群聊设置',
  },
  personal: {
    title: '个人设置',
  },
  auto: {
    title: '自动分区',
  },
  lab: {
    title: '实验室',
  },
};

const App = memo(() => {
  return (
    <Tabs
      defaultValue="status"
      className="w-full flex flex-col h-screen overflow-hidden bg-secondary"
    >
      <TabsList className="w-full overflow-x-auto justify-start hide-scrollbar p-2 h-auto rounded-none ">
        {Object.entries(pages).map(([key, { title }]) => (
          <TabsTrigger key={key} value={key} className="text-base px-4 rounded-full">
            {title}
          </TabsTrigger>
        ))}
      </TabsList>
      <div className="overflow-y-auto flex-1">
        {Object.entries(pages).map(([_key]) => {
          const key = _key as keyof PageType;
          if (key === 'status') {
            return (
              <TabsContent key={key} value={key}>
                <Status />
              </TabsContent>
            );
          } else {
            return (
              <TabsContent key={key} value={key}>
                <div className="px-2 flex flex-col gap-2">
                  {settings[key].map((item) => (
                    <Item data={item} key={item.name} />
                  ))}
                </div>
              </TabsContent>
            );
          }
        })}
      </div>
    </Tabs>
  );
});
export default App;
