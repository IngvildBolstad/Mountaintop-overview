Module.exports= (sequelize, Sequelize) => {
    const Continents = sequelize.define(
        'Continents',
        {
            name: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false
            },
            
        },
        {
            timestamps: false,
        }
    )
    
    Continents.associate = function (models) {
        Continents.belongsTo(models.Hemispheres, { foreignKey: { allowNull: false } })
        Continents.hasMany(models.Countries, { foreignKey: { allowNull: false } })
    }
    
    return Continents
}