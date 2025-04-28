module.exports = (sequelize, Sequelize) => {
    const Mountains = sequelize.define(
        'Mountains',
        {
            name: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false
            },
            moh: {
                type: Sequelize.DataTypes.INTEGER,
                allowNull: false
            }
        },
        {
            timestamps: false,
        }       
    )
    
    Mountains.associate = function (models) {
        Mountains.belongsTo(models.MountainRanges, { foreignKey: { allowNull: false } })
    }

    return Mountains
}