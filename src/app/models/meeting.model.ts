export interface Meeting {
  message: string;
  status: number;
  dataObject: {
    appName: string;
    routeName: string;
    data: {
      name: string;
      meetingLink: string;
      meetingDate: string;
      _id: string;
    }[];
  };
}
