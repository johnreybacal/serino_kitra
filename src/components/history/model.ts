import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../../config/sequelize';
import { Treasure } from '../treasure/model';
import { User } from '../user/model';

export class History extends Model {
    declare user_id: number;
    declare treasure_id: number;
    declare amount: number;
}

History.init({
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: "id"
        }
    },
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
    modelName: 'History',
});