import { Config, SchedulerData, SchedulerProjectData } from "@/types/global";
import { ParsedDatesRange } from "@/utils/getDatesRange";

export type SchedulerProps = {
  data: SchedulerData;
  isLoading: boolean;
  onRangeChange?: (range: ParsedDatesRange) => void;
  onItemClick?: (data: SchedulerProjectData) => void;
  onFilterData?: () => void;
  onClearFilterData?: () => void;
  config?: Config;
  startDate?: string;
};

export type StyledOutsideWrapperProps = {
  showScroll: boolean;
};
