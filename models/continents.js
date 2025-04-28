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
    // SET UP ASSOCIATION
    
    return Continents
}