import './util/polyfills';
import './util/moveTo';
import configuration from './configuration/index';
import { createChart, createControls, createTable } from 'webcharts';
import callbacks from './callbacks/index';

//layout and styles
import layout from './layout';
import styles from './styles';

export default function myPackageFunctionGoesHere(element = 'body', settings = {}) {
    //layout and styles
    layout(element);
    styles();

    //Define chart.
    const mergedSettings = Object.assign(
        {},
        JSON.parse(JSON.stringify(configuration.settings)),
        settings
    );
    const syncedSettings = configuration.syncSettings(mergedSettings);
    const syncedControlInputs = configuration.syncControlInputs(
        configuration.controlInputs(),
        syncedSettings
    );
    const controls = createControls(document.querySelector(element).querySelector('#wc-controls'), {
        location: 'top',
        inputs: syncedControlInputs
    });
    const chart = createChart(
        document.querySelector(element).querySelector('#wc-chart'),
        syncedSettings,
        controls
    );

    //Define chart callbacks.
    for (const callback in callbacks)
        chart.on(callback.substring(2).toLowerCase(), callbacks[callback]);

    return chart;
}
