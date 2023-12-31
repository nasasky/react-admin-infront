import { Tooltip } from 'antd';
import { Icon } from '@iconify/react';
import { useTranslation } from 'react-i18next';

function DataScreen() {
  const { t } = useTranslation();

  /** 跳转数据大屏 */
  const goDataScreen = () => {
    window.open('https://iamsouth.github.io');
  };

  return (
    <Tooltip title={t('public.bigDataScreen')}>
      <div onClick={goDataScreen}>
        <Icon
          className="flex items-center justify-center text-lg mr-3 cursor-pointer"
          icon='ion:bar-chart-sharp'
        />
      </div>
    </Tooltip>
  );
}

export default DataScreen;