import { DataTypes, Model } from 'sequelize';
import db from '.';
import Teams from './teamsModel';

class Matches extends Model {
  id!: number;
  homeTeam!: number;
  homeTeamGoals!: number;
  awayTeam!: number;
  awayTeamGoals!: number;
  inProgress!: boolean;
}

Matches.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  homeTeam: { type: DataTypes.INTEGER },
  homeTeamGoals: { type: DataTypes.INTEGER },
  awayTeam: { type: DataTypes.INTEGER },
  awayTeamGoals: { type: DataTypes.INTEGER },
  inProgress: { type: DataTypes.BOOLEAN },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'matches',
  timestamps: false,
});

// hasOne = tem um
// belongsTo = pertencente a
// `Workaround` para aplicar as associations em TS:
// Associations 1:N devem ficar em uma das instâncias de modelo

Matches.belongsTo(Teams, { foreignKey: 'homeTeam', as: 'teamHome' });
Matches.belongsTo(Teams, { foreignKey: 'awayTeam', as: 'teamAway' });

// Matches.hasMany(Teams, { foreignKey: 'id', as: 'team' });
// Example.hasMany(OtherModel, { foreignKey: 'campoD', as: 'campoEstrangeiroD' });

export default Matches;
