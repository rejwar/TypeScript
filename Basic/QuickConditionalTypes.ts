//conditional Types

type CustomData = Data;
type CustomString = string;

type TrueString =  CustomString  extends string ? true : false;
type ConditionalNumber = CustomData extends Date ? number : string;
type DateAssignment = CustomData extends Date ? Date : undefined;