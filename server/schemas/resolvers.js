const { Profile, Run } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {
        profiles: async () => {
            return await Profile.find().populate('runs');
        },
        // runs: async(parent, { runId }) => {
        //   return await Profile.find({_id: runId});
        // },
        profile: async(parent, { profileId }) => {
            return await Profile.findOne({_id: profileId }).populate('runs');
        },
    },

    Mutation: {
        addProfile: async (parent, { name, email, password }) => {
            const profile = await Profile.create({ name, email, password });
            const token = signToken(profile);
      
            return { token, profile };
          },
        login: async (parent, { email, password }) => {
            const profile = await Profile.findOne({ email });
      
            if (!profile) {
              throw AuthenticationError;
            }
      
            const correctPw = await profile.isCorrectPassword(password);
      
            if (!correctPw) {
              throw AuthenticationError;
            }
      
            const token = signToken(profile);
            return { token, profile };
          },
        addRun: async (parent, { profileId, time, distance }) => {
            const logRun = await Run.create({ profileId, time, distance });
            await Profile.findOneAndUpdate(
              { _id: profileId },
              {
                $addToSet: { runs: logRun },
              },
              {
                new: true,
                runValidators: true,
              }
            );
            return logRun;
          },
        removeProfile: async(parent, { profileId }) => {
            return Profile.findOneAndDelete({_id: profileId });
        },
        removeRun: async (parent, { profileId, runId }) => {
          const delRun = await Run.findOneAndDelete({ _id: runId });
          await Profile.findOneAndUpdate(
            { _id: profileId },
            { $pull: { runs: runId } },
            { new: true }
          );
          return delRun;
        },
    },
};

module.exports = resolvers;