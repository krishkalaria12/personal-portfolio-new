"use client";

import { 
  Card,
  CardHeader
} from "@/components/ui/card";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
};

export const CardWrapper = ({
  children,
  headerLabel,
}: CardWrapperProps) => {
  return (
    <Card className="w-[400px] shadow-md">
      <CardHeader>
        {headerLabel}
      </CardHeader>
    </Card>
  );
};
