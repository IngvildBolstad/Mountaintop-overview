module.exports = (Sequelize, Sequelize) => {
    const MountainRanges = sequelize.define(
        'MountainRanges',
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
    
    MountainRanges.associate = function (models) {
        MountainRanges.belongsToMany(models.Countries, { foreignKey: { allowNull: false } })
        MountainRanges.hasMany(models.Mountains, { foreignKey: { allowNull: false } })
    }

    return MountainRanges
}