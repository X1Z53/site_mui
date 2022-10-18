from ftplib import FTP
from json import dump


def ftp_walk(path):
    ftp.cwd(path)
    items = {item: ftp_walk(item) for item in ftp.nlst()} if '.' not in ftp.nlst()[0] else [ftp.nlst()[0], format_file_size(ftp.size(ftp.nlst()[0]))]
    ftp.cwd('..')
    return items

def format_file_size(size):
    for postfix in ['B', 'KB', 'MB', 'GB']:
        if size < 1024:
            size = f'{size:.1f} {postfix}'
            break

        size /= 1024

    return size


ftp = FTP('89.179.119.189')
ftp.login('admin', 'superroot1')

'''
{
    program: {
        variant1: file1,
        variant2: file2},
    programs_folder: {
        program1: {variant: file},
        program2: {variant: file}
    }
}
'''
full_list = str(ftp_walk('site')).replace("'", '"')
print(full_list)
open('collection.json', 'w').write(full_list)

ftp.quit()
