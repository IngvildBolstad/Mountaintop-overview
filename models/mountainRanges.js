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
    return MountainRanges
}