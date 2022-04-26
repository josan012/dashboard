import { Button, Space } from "ebs-design";
import { useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";

const Pagination: React.FC<any> = ({
  count = 3,
  filters = { page: 1, limit: 15 },
  setFilters,
  className,
}) => {
  const { t } = useTranslation();

  const state = useMemo(
    () =>
      count ? `${filters.page} of ${Math.ceil(count / filters.limit)}` : null,
    [filters]
  );

  const onClickPrevious = useCallback(
    () => setFilters((current: any) => ({ page: parseInt(current.page) - 1 })),
    [setFilters]
  );
  const onClickNext = useCallback(
    () => setFilters((current: any) => ({ page: parseInt(current.page) + 1 })),
    [setFilters]
  );

  return (
    <Space align="center" justify="space-between" className={className}>
      <span className="no-wrap">{state}</span>
      <Space>
        <Button size="small" type="ghost" onClick={onClickPrevious}>
          {t("previous")}
        </Button>

        <Button size="small" type="ghost" onClick={onClickNext}>
          {t("next")}
        </Button>
      </Space>
    </Space>
  );
};

export default Pagination;
