module.exports = (sequelize, Sequelize) => {
    const Hemispheres = sequelize.define(
        'Hemispheres',
        {
            southern: {
                type: Sequelize.DataTypes.BOOLEAN,
                allowNull: false
            },
            northern: {
                type: Sequelize.DataTypes.BOOLEAN,
                allowNull: false

            }

        },
        {
            timestamps: false,
        }
    )
    
    Hemispheres.associate = function (models) {
        Hemispheres.hasMany(models.Continents, { foreignKey: { allowNull: false } })
    }

    return Hemispheres
}