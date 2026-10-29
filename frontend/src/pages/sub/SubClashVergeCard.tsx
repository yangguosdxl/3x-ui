import { useTranslation } from 'react-i18next';
import { Button, QRCode } from 'antd';
import { CopyOutlined } from '@ant-design/icons';

import { APP_ICONS } from './appIcons';

interface SubClashVergeCardProps {
  url: string;
  onCopy: (value: string) => void;
}

// Clash Verge Rev reads Mihomo profiles, not base64 subscriptions, so the card
// always points at the Clash endpoint: the QR encodes that exact URL.
export default function SubClashVergeCard({ url, onCopy }: SubClashVergeCardProps) {
  const { t } = useTranslation();
  const icon = APP_ICONS['Clash Verge Rev'];

  return (
    <div className="sub-cvr-card">
      <div className="sub-cvr-code">
        <QRCode
          value={url}
          size={168}
          type="svg"
          bordered={false}
          color="#000000"
          bgColor="#ffffff"
        />
      </div>
      <div className="sub-cvr-body">
        <div className="sub-cvr-head">
          <img className="sub-app-logo" src={icon.src} alt="" width={32} height={32} />
          <div>
            <div className="sub-cvr-title">Clash Verge Rev</div>
            <div className="sub-muted">{t('subscription.clashVergeHint')}</div>
          </div>
        </div>
        <div className="sub-cvr-url" dir="ltr" title={url}>
          {url}
        </div>
        <Button icon={<CopyOutlined aria-hidden />} onClick={() => onCopy(url)}>
          {t('copy')}
        </Button>
      </div>
    </div>
  );
}
