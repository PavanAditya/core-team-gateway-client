export interface Attendee {
  message: string;
  status: number;
  dataObject: {
    appName: string;
    routeName: string;
    data: {
      name: string;
      refferedAboNum: string;
      attendedMeetingId: string;
    }[];
  };
}
