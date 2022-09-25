export enum Status {
  TODO = "todo",
  IN_PROGRESS = "in_progress",

  DONE = "done",
}

export const StatusLabel = {
  [Status.TODO]: "To do",
  [Status.IN_PROGRESS]: "In progress",
  [Status.DONE]: "Done",
};

export const StatusColor = {
  [Status.TODO]: "#000",
  [Status.IN_PROGRESS]: "orange",
  [Status.DONE]: "green",
};
