export default function syncSettings(settings) {
    // webcharts settings
    settings.x.column = settings.x_col;
    settings.y.column = settings.y_col;
    settings.marks[0].per[0] = settings.id_col;
    return settings;
}
