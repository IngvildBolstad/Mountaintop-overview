const mountainRanges = require("./mountainRanges")

module.exports = (sequelize, Sequelize) => {
    const Countries = sequelize.define(
        'Countries',
        {
            name: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false
            }
        },
        {
            timestamps: false,
        }
    )
    
    Countries.associate = function (models) {
        Countries.belongsTo(models.Continents, { through: 'mountainRangeCountries' }, { foreignKey: { allowNull: false } })
        Countries.hasMany(models.MountainRanges, { foreignKey: { allowNull: false } })
    }

    return Countries
}