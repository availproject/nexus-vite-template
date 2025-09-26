import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Nexus() {
  return (
    <div className="flex items-center justify-center w-full max-w-xl flex-col gap-6 z-10">
      <Tabs defaultValue="balance" className="w-full items-center">
        <TabsList>
          <TabsTrigger value="balance">Unified Balance</TabsTrigger>
          <TabsTrigger value="bridge">Send Tokens</TabsTrigger>
        </TabsList>
        <TabsContent
          value="balance"
          className="w-full items-center"
        ></TabsContent>
        <TabsContent
          value="bridge"
          className="w-full items-center bg-transparent"
        ></TabsContent>
      </Tabs>
    </div>
  );
}
