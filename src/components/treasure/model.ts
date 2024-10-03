import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../../config/sequelize';

export class Treasure extends Model { }

// latlong precision:
// https://stackoverflow.com/a/1196429
Treasure.init({
    latitude: {
        type: DataTypes.DECIMAL(8, 6),
        allowNull: false,
    },
    longitude: {
        type: DataTypes.DECIMAL(9, 6),
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    sequelize,
    modelName: 'Treasure',
});