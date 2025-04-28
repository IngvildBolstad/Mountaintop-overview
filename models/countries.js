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
        Countries.belongTo(models.Continents, { foreignKey: { allowNull: false } })
        Countries.hasMany(models.MountainRanges, { foreignKey: { allowNull: false } })
    }

    return Countries
}