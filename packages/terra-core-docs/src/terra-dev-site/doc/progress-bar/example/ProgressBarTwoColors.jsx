import React from 'react';
import ProgressBar from 'terra-progress-bar';
import classNames from 'classnames/bind';
import styles from 'terra-progress-bar/src/colors.module.scss';

const cx = classNames.bind(styles);

const ProgressBarGradient = () => (
  <div>
    <ProgressBar valueText="5%" value={5} max={10} colorClass={cx(['two-colors-bar-example-1'])} />
    <br />
    <br />
    <ProgressBar valueText="3%" value={3} max={10} colorClass={cx(['two-colors-bar-example-2'])} />
    <br />
    <br />
    <ProgressBar valueText="8%" value={8} max={10} colorClass={cx(['two-colors-bar-example-3'])} />
  </div>
);

export default ProgressBarGradient;
