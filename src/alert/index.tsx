import React from 'react';
import t from "prop-types";

export interface AlertProps {
    kind?: 'info' | 'positive' | 'negative' | 'warining';
}

export type KindMap = Record<Required<AlertProps>['kind'], string>

const prefixCls = "happy-alert";

const kinds: KindMap = {
    info: '#5352ED',
    positive: '#2ED573',
    negative: '#FF4757',
    warining: '#FFA502',
};

const Alert: React.FC<AlertProps> = ({ children, kind = 'info', ...rest }) => (
    <div
        className={prefixCls}
        style={{
            background: kinds[kind],
        }}
        {...rest}
    >
        {children}
    </div>
);
Alert.propTypes = {
    kind: t.oneOf(['info', 'positive', 'nefative', 'warning']),
};

export default Alert;