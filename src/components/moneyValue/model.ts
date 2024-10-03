import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../../config/sequelize';
import { Treasure } from '../treasure/model';

export class MoneyValue extends Model { }

MoneyValue.init({
    treasure_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Treasure,
            key: "id"
        }
    },
    amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    sequelize,
    modelName: 'MoneyValue',
});
// Drop default id:
// https://stackoverflow.com/a/38871631
MoneyValue.removeAttribute('id');
