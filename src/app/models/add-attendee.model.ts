export interface AddAttendee {
  message: string;
  status: number;
  dataObject: {
    appName: string;
    routeName: string;
    data: {
      name: string;
      aboNum: number;
    }[];
  };
}
