import telnetlib, time

HOST = 'mxer.uwaterloo.ca'
tn = telnetlib.Telnet(HOST, 25)

tn.read_until('postmaster@uwaterloo.ca')
print 'read'

tn.write('HELO mxer.uwaterloo.ca\n')
tn.read_until('you')
print 'read'

tn.write('MAIL FROM: test@ing.com\n')
tn.read_until('ok')
print 'read'

tn.write('RCPT TO: a26sivakumaran@uwaterloo.ca\n')
tn.read_until('ok')
print 'read'

tn.write('DATA\n')
tn.read_until('itself')
print 'read'

tn.write('hi\n.\n')
tn.read_until('delivery')
print 'read'

tn.write('QUIT\n')
tn.read_until('connection')
print 'read'

tn.close()
