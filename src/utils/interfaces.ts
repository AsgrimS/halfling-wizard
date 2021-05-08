import { QueryLazyOptions, OperationVariables } from "@apollo/client";

export interface LazyQueryCallbackFunction {
  getClassDetail: (
    options?: QueryLazyOptions<OperationVariables> | undefined
  ) => void;
}
