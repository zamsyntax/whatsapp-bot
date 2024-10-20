module.exports = {
    name : "group-info",
    description : "Show Group Info",
    cmd : ['groupinfo', 'ginfo'],
    menu : {
        label : 'group',
    },
    run : async({ m, sock }) => {
        try {
            if(!m.isGroup) return
            if(!m.isGroup.botIsAdmin) return
            if(!m.isGroup.senderIsAdmin) return
            let text = `*Group Info* ${m.isGroup.groupMetadata.subject} \n\n`
            text += `*ID*: ${m.isGroup.groupMetadata.id} \n`
            text += `*Group Name*: ${m.isGroup.groupMetadata.subject} \n`
            text += `*Group Owner*: ${m.isGroup.groupMetadata.owner.split('@')[0]} \n`
            text += `*isCommunity*: ${m.isGroup.groupMetadata.isCommunity ? 'Yes' : 'No'} \n`
            text += `*joinApprovalMode*: ${m.isGroup.groupMetadata.joinApprovalMode ? 'Yes' : 'No'} \n`
            text += `*memberAddMode*: ${m.isGroup.groupMetadata.memberAddMode ? 'Yes' : 'No'} \n`
            text += `*ephemeralMessage*: ${m.isGroup.groupMetadata.ephemeralDuration ? 'Yes' : 'No'} \n`
            text += `*Participants*: ${m.isGroup.groupMetadata.participants.length} Members \n\n`
            text += String.fromCharCode(8206).repeat(4001)
            text += `*Info Settings Bot*: \n\n`
            text += '{\n'
            for (const [key, value] of Object.entries(m.db.group)) {
                if(typeof value == 'object') {
                    text += `  ${key}: ${JSON.stringify(value)},\n`
                } else {
                    text += `  ${key}: ${value},\n`
                }
            }
            text += '}'
            m._reply(text)
        } catch(error) {
            await m._reply(error.message)
        }
    }
}