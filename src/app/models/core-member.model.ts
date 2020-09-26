export interface CoreMember {
  message: string;
  status: number;
  dataObject: {
    appName: string;
    routeName: string;
    data: {
      name: string;
      aboNum: string;
      admin: boolean;
      addedBy: string;
    }[];
  };
}
